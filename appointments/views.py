from rest_framework.views import APIView # get the APIView class from DRF
from rest_framework.response import Response # get the Response class from DRF

from .models import Book
from .serializers import BookSerializer # get the BookSerializer

# Create your views here.
class ListView(APIView): # extend the APIView

    def get(self, _request):
        books = Book.objects.all() # get all the books
        serializer = BookSerializer(books, many=True)

        return Response(serializer.data) # send the JSON to the client


class DetailView(APIView): # extend the APIView

    def get(self, _request, pk):
        book = Book.objects.get(pk=pk) # get a book by id (pk means primary key)
        serializer = BookSerializer(book)

        return Response(serializer.data) # send the JSON to the client
