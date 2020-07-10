from django.shortcuts import render
from django.views.generic import TemplateView
from django.http import HttpResponse, JsonResponse

import time
import random

class FrontEndRenderView(TemplateView):
    def get(self, request, *args, **kwargs):
        return render(request, "index.html", context=None)

def getData(request):
    data = {
        "id": random.randint(1, 100),
        "used_space": random.randint(128, 1024),
        "free_space": random.randint(128, 1024)
    }
    return JsonResponse(data, safe=False)