from django.urls import path, include
from rest_framework import routers
from .views import *
from assistify.views import UserViewSet
router = routers.DefaultRouter()
router.register(r'users', UserViewSet)

urlpatterns = [

]