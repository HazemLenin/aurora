from pyexpat import model
from django.db import models
from django.utils.translation import gettext_lazy as _
# Create your models here.

class Product(models.Model):
    title = models.CharField(_("Title"), max_length=265)
    description = models.TextField(_("Description"))
    category = models.ForeignKey("Category", verbose_name=_("Category"), blank=True, null=True, on_delete=models.SET_NULL)
    price = models.PositiveIntegerField(_("Price"))

    def __str__(self):
        return self.title

class ProductImage(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name="images")
    image = models.ImageField(_("Image"), upload_to="products")

    def __str__(self):
        return f'{self.product.title} image'


class Category(models.Model):
    title = models.CharField(_("Title"), max_length=265)

    def __str__(self):
        return self.title