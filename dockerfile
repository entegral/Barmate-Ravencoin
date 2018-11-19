FROM centos:7

# Install Ravencoin dependancies
RUN yum -y update
RUN yum -y install gcc-c++ libtool make autoconf automake openssl-devel libevent-devel boost-devel libdb4-devel libdb4-cxx-devel python3

# Install utilities
RUN yum -y install wget

# Install vim
RUN yum -y install epel-release
RUN curl -o /etc/yum.repos.d/dperson-neovim-epel-7.repo https://copr.fedorainfracloud.org/coprs/dperson/neovim/repo/epel-7/dperson-neovim-epel-7.repo 
RUN yum -y install neovim

# Install Raven binaries
RUN mkdir /home/bin
WORKDIR /home/bin
RUN wget https://github.com/RavenProject/Ravencoin/releases/download/v2.1.3/raven-2.1.3.0-x86_64-linux-gnu.tar.gz
RUN wget https://github.com/RavenProject/Ravencoin/releases/download/v2.1.3/raven-2.1.3.0-x86_64-linux-gnu.tar.gz.md5sum
RUN wget https://github.com/RavenProject/Ravencoin/releases/download/v2.1.3/raven-2.1.3.0-x86_64-linux-gnu.tar.gz.sha256sum

# Run checksums
WORKDIR /home/bin
RUN [ "$(md5sum raven-2.1.3.0-x86_64-linux-gnu.tar.gz)" == "$(cat raven-2.1.3.0-x86_64-linux-gnu.tar.gz.md5sum)" ]

RUN [ "$(sha256sum raven-2.1.3.0-x86_64-linux-gnu.tar.gz)" == "$(cat raven-2.1.3.0-x86_64-linux-gnu.tar.gz.sha256sum)" ]

# Extract and start ravend binary
RUN tar xvzf raven-2.1.3.0-x86_64-linux-gnu.tar.gz
ENTRYPOINT ["./raven-2.1.3.0/bin/ravend"]
