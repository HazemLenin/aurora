from unicodedata import category
from rest_framework import viewsets
from .models import Product, Category
from .serializers import ProductSerializer, CategorySerializer

class ProductViewSet(viewsets.ReadOnlyModelViewSet):
    model = Product
    serializer_class = ProductSerializer
    queryset = Product.objects.all()

    def list(self, request, *args, **kwargs):
        # check if there is category query to filter products
        if request.GET.get('category', False):
            try:
                categoryId = int(request.GET['category'])
                category = Category.objects.get(id=categoryId)
                self.queryset = Product.objects.filter(category=category)
            except Category.DoesNotExist:
                pass # will return all products
            
        return super().list(self, request, *args, **kwargs)


class CategoryViewSet(viewsets.ReadOnlyModelViewSet):
    model = Category
    serializer_class = CategorySerializer
    queryset = Category.objects.all()