from django.shortcuts import render
from django.core.mail import send_mail

# Create your views here.
# Title, Message, from email, to email, throw error if email fails
def index(request):

    send_mail('Hello from MBS',
    'I really hope this works again!',
    'medbooking@btinternet.com',
    ['fagiw13004@emailhost99.com'],
    fail_silently=False)

    return render(request, 'send/index.html')
