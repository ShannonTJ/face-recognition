# Generated by Django 2.2 on 2021-02-02 22:43

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tweets', '0004_auto_20210202_1543'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='tweetlike',
            name='timestamp',
        ),
    ]
