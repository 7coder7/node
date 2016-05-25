#include<stdio.h>
#include<unistd.h>
int main() {
char a[123];
getcwd(a, sizeof(a));
	printf("%s", a);
}
