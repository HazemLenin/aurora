from django.shortcuts import reverse
from ..urls import urlpatterns
from rest_framework.test import APITestCase, URLPatternsTestCase
from rest_framework import status


class ProductTests(APITestCase, URLPatternsTestCase):
    urlpatterns = urlpatterns

    def test_list_products(self):
        """
        Ensure we can list all products
        """
        url = reverse('products')
        response = self.client.get(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)