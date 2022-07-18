from django.db import models
from django.conf import settings
from django.utils.translation import gettext_lazy as _
from django.db.models.signals import post_save
from django.dispatch import receiver

# Create your models here.

class Order(models.Model):
    """
    Contains all ordered products and it's also a cart when is_completed is false
    """

    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    purchased = models.BooleanField(_("Purchased"), default=False)
    ordered_on = models.DateTimeField(_("Ordered on"), blank=True, null=True)
    products = models.ManyToManyField("products.Product", verbose_name=_("Products"), through="OrderItem")
    total_price = models.PositiveIntegerField(_("Total Price"), default=0)

    def __str__(self):
        return f'{self.user.username}\'s order'


class OrderItem(models.Model):
    """
    M2M model for Order and Product
    """
    product = models.ForeignKey("products.Product", on_delete=models.CASCADE)
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    quantity = models.PositiveSmallIntegerField(_("Quantity"))

    def __str__(self):
        return f'{self.product.title}'


@receiver(post_save, sender=OrderItem)
def update_total_price(sender, instance, **kwargs):
    order = instance.order
    order.total_price += (instance.product.price * instance.quantity)
    order.save()