from django.urls import path
from rest_framework.routers import SimpleRouter
from . import api

app_name = 'orders'

router = SimpleRouter()
router.register('orders', api.OrderViewSet, basename='Order')

urlpatterns = [
    path('add-to-cart/', api.AddToCartView.as_view()),
    path('purchase/', api.PurchaseView.as_view()),
]

urlpatterns += router.urls