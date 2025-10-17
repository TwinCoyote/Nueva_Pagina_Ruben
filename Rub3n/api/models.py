from django.db import models

class Proyecto(models.Model):
    titulo = models.CharField(max_length=100)
    descripcion = models.TextField()
    link = models.URLField(blank=True)
    imagen = models.ImageField(upload_to='proyectos/', blank=True)
