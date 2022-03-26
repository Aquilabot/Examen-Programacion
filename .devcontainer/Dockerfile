FROM fedora:latest

RUN dnf -y update && dnf clean all
RUN dnf install -y https://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm
RUN dnf install -y https://download1.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm
RUN dnf install -y git wget mariadb npm neofetch && dnf clean all
RUN dnf upgrade --refresh -y
RUN dnf install -y maven-openjdk17 --allowerasing && dnf clean all
RUN dnf install -y dnf-plugins-core java-latest-openjdk.x86_64 && dnf clean all
RUN yes | npm install -g npm@latest
RUN yes | npm install -g @angular/cli
RUN yes 2 | update-alternatives --config java
RUN mysql --version
RUN mvn --version
RUN java --version
RUN neofetch

RUN useradd -m vscode
RUN usermod -a -G sudo vscode