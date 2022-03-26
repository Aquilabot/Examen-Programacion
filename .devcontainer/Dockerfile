FROM fedora:latest

RUN sudo dnf -y update && dnf clean all
RUN sudo dnf install -y https://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm
RUN sudo dnf install -y https://download1.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm
RUN sudo dnf install -y git wget mariadb npm neofetch && dnf clean all
RUN sudo dnf upgrade --refresh -y
RUN sudo dnf install -y maven-openjdk17 --allowerasing && dnf clean all
RUN sudo dnf install -y dnf-plugins-core java-latest-openjdk.x86_64 && dnf clean all
RUN yes | sudo npm install -g npm@latest
RUN yes | sudo npm install -g @angular/cli
RUN yes 2 | sudo update-alternatives --config java
RUN mysql --version
RUN mvn --version
RUN java --version
RUN neofetch

RUN useradd -m vscode