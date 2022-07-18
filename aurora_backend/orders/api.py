from rest_framework import viewsets, views, response, status
from .models import Order, OrderItem
from .serializers import OrderSerializer, OrderItemSerializer
from rest_framework.permissions import IsAuthenticated
from products.models import Product
from django.utils import timezone


class OrderViewSet(viewsets.ModelViewSet):
    model = Order
    serializer_class = OrderSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        if not Order.objects.filter(user=self.request.user, purchased=False).exists():
            Order.objects.create(user=self.request.user, purchased=False)
        return Order.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class AddToCartView(views.APIView):
    permission_classes = [IsAuthenticated]

    def post(self, *args, **kwargs):
        productId = int(self.request.data.get('product', False))
        quantity = int(self.request.data.get('quantity', False))
        if productId and quantity:
            try:
                product = Product.objects.get(id=productId)
                order = Order.objects.get_or_create(
                    user=self.request.user,
                    purchased=False,
                )
                orderItem =  OrderItem.objects.create(product=product, order=order[0], quantity=quantity)
                serializer = OrderItemSerializer(orderItem)
                return response.Response(serializer.data, status=status.HTTP_201_CREATED)

            except Product.DoesNotExist:
                return response.Response({"detail": "No such product."}, status=status.HTTP_404_NOT_FOUND)
        else:
            return response.Response({"detail": "product id and quantity are required."}, status=status.HTTP_400_BAD_REQUEST)


class PurchaseView(views.APIView):
    permission_classes = [IsAuthenticated]

    def post(self, *args, **kwargs):
        order = Order.objects.get(
            user=self.request.user,
            purchased=False,
        ) 
        order.purchased = True
        order.ordered_on = timezone.now()
        order.save()
        serializer = OrderSerializer(order)

        Order.objects.create(user=self.request.user) # new clean cart

        return response.Response(serializer.data, status=status.HTTP_200_OK)
