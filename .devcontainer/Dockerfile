FROM fedora:latest

RUN dnf -y update && dnf clean all
RUN dnf install -y https://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm
RUN dnf install -y https://download1.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm
RUN dnf install -y git wget curl mariadb npm neofetch passwd && dnf clean all
RUN dnf upgrade --refresh -y
RUN dnf install -y maven-openjdk17 --allowerasing && dnf clean all
RUN dnf install -y dnf-plugins-core java-latest-openjdk.x86_64 && dnf clean all
RUN yes | npm install -g npm@latest
RUN yes | npm install -g @angular/cli
RUN yes 2 | update-alternatives --config java
RUN curl -s "https://get.sdkman.io" | bash
RUN source "$HOME/.sdkman/bin/sdkman-init.sh"
RUN sdk install gradle
RUN sdk version
RUN mysql --version
RUN mvn --version
RUN gradle --version
RUN java --version
RUN neofetch

RUN useradd -m vscode
RUN usermod -aG wheel vscode
RUN echo 'Docker' | passwd --stdin vscode 