from django.shortcuts import render
from django.core.mail import send_mail

# for alternate email attempt DataFlair
# from settings import EMAIL_HOST_USER
# from . import forms

# Create your views here.
# Title, Message, from email, to email, throw error if email fails


def index(request):

    send_mail('Hello from L.A.B.S',
              'We are pleased to confirm that your booking with Labs is now complete.',
              # 'medbooking@btinternet.com',
              'labsmedical@btinternet.com',
              ['medielab@2go-mail.com'],
              fail_silently=False)

    return render(request, 'send/index.html')


# def confirmation(request):

#     datatuple = (
#                 ('Hello from L.A.B.S', 'Confirmation.', 'medbooking@btinternet.com', ['labs@2go-mail.com']),
#                 ('Hello from L.A.B.S', 'Confirmation.', 'fmedbooking@btinternet.com', ['red_devil@talk21.com']),
# )

# send_mass_mail(datatuple)

    # send_mail(
    #   'Hello from L.A.B.S',
    #   'Confirmation.',
    #   ('medbooking@btinternet.com',),
    #   ['labs@2go-mail.com', 'red_devil@talk21.com'],
    #   fail_silently=False)

    # return send_mail('subject', 'message', 'from_email', 'recipient_list')  
    




# Create your views here.
#DataFlair #Send Email
# def subscribe(request):
#     sub = forms.Subscribe()
#     if request.method == 'POST':
#         sub = forms.Subscribe(request.POST)
#         subject = 'Welcome to DataFlair'
#         message = 'Hope you are enjoying your Django Tutorials'
#         recepient = str(sub['Email'].value())
#         send_mail(subject, 
#             message, EMAIL_HOST_USER, [recepient], fail_silently = False)
#         return render(request, 'subscribe/success.html', {'recepient': recepient})
#     return render(request, 'subscribe/index.html', {'form':sub})
