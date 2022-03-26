FROM fedora:latest

RUN sudo dnf -y update && dnf clean all
RUN sudo dnf install -y https://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm
RUN sudo dnf install -y https://download1.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm
RUN sudo dnf install -y git wget mariadb npm && dnf clean all
RUN yes | sudo npm install -g npm
RUN yes | sudo npm install -g @angular/cli
RUN sudo dnf upgrade --refresh -y
RUN sudo dnf install -y dnf-plugins-core java-latest-openjdk.x86_64 && dnf clean all
RUN java --version

RUN useradd -m vscode