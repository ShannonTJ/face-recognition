import random
from django.contrib.auth import get_user_model
from django.shortcuts import render, redirect
from django.http import HttpResponse, Http404, JsonResponse
from django.utils.http import is_safe_url
from django.conf import settings
from rest_framework.response import Response
from rest_framework.authentication import SessionAuthentication
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from rest_framework.permissions import IsAuthenticated
from ..models import Profile

User = get_user_model()

ALLOWED_HOSTS = settings.ALLOWED_HOSTS


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def user_profile_detail_view(request, username, *args, **kwargs):
    current_user = request.user
    to_follow_user =
    return Response({}, status=200)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def user_follow_view(request, username, *args, **kwargs):
    current_user = request.user
    to_follow_user =
    return Response({}, status=400)
