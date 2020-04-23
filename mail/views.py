from django.shortcuts import render
from django.core.mail import send_mail

# Create your views here.
# Title, Message, from email, to email, throw error if email fails


def index(request):

    send_mail('Hello from L.A.B.S',
              'We are pleased to confirm that your booking with Labs is now complete.',
              'medbooking@btinternet.com',
              ['labs@2go-mail.com'],
              fail_silently=False)

    return render(request, 'send/index.html')
