from django.urls import path
from . import api
from rest_framework import routers

app_name = 'products'

router = routers.SimpleRouter()

router.register('products', api.ProductViewSet)

router.register('categories', api.CategoryViewSet)

urlpatterns = router.urls