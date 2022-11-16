#include<bits/stdc++.h>
int main()
{
    int t;
    cin>>t;
    while(t--)
    {
        int n;
        int x[n], y[n];
        for(int i=0;i<n;i++)
        {
            cin>>arr[i];
            sum1=sum1+arr[i];
        }
        for(int i=0;i<n;i++)
        {
            cin>>y[i];
            sum2=sum2+y[i];
        }
        if(sum2<sum1)
        {
            continue;
        }
        int arr[n];
        for(int i=0;i<n;i++)
        arr[i]=x[i]-y[i];
        for(int i=0;i<n;i++)
        cout<<arr[i]<<" ";
        cout<<endl;
    }
}