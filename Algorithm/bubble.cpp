#include<stdio.h>
int main()
{
    int i,n=5,j,temp;
    int a[5]={2,43,432,34,3};

    for(i=0;i<n;i++)
    {
        for(j=0;j<n;j++)
        {
            if(a[j]>a[j+1])
            {
                temp=a[j];
                a[j]=a[j+1];
                a[j+1]=temp;
            }
        }
    }

    for(i=0;i<n;i++)
        {
          printf("%d\n",a[i]);
        }
    return 0;
}