from tokenize import blank_re
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.translation import gettext_lazy as _
from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token

# Create your models here.

class User(AbstractUser):
    first_name = models.CharField(_("first name"), max_length=150)
    last_name = models.CharField(_("last name"), max_length=150)
    email = models.EmailField(_("email address"))
    birth_date = models.DateField(_("Birth date"), blank=True, null=True)
    profile_picture = models.ImageField(_("Profile picture"), upload_to="profile_pictures", blank=True, null=True)
    REQUIRED_FIELDS = [
        'first_name',
        'last_name',
        'email',
        'birth_date',
    ]


@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)