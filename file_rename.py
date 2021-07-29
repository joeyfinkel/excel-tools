import pprint
import os

path = r'C:\Users\joeyf\Desktop\WALLPL~1'

for filename in os.listdir(path):
    dst = filename[0:5]
    if '1.jpg' in filename:
        new_path = os.path.join(path, filename)
        dst += '_main.jpg'
        os.rename(new_path, new_path+dst)
    if '2.jpg' in filename:
        new_path = os.path.join(path, filename)
        dst += '_size.jpg'
        os.rename(new_path, new_path+dst)
    if '3.jpg' in filename:
        new_path = os.path.join(path, filename)
        dst += '_lifestyle.jpg'
        os.rename(new_path, new_path+dst)
