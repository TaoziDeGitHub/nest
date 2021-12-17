#从docker官网拉取标准的nginx镜像,我们需要基于标准的nginx镜像制作自己的镜像
FROM nginx
#拷贝当前目录的文件到指定文件夹下，改文件夹为镜像中的文件夹
COPY ./dist  /usr/share/nginx/html
#拷贝nginx.conf文件到镜像下，替换掉原有的nginx.conf
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf 
#输出完成标志
RUN echo 'build img ok!'