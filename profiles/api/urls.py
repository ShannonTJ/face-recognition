from django.urls import path

from .views import user_follow_view

"""
For client,
BASE ENDPOINT /api/profiles/
"""

urlpatterns = [
    path('<str:username>/follow/', user_follow_view),
]