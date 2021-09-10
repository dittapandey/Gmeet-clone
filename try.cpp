/* Name: Yashvi Panchal
   Roll No.: 200123073
   Lab No.: 04 Q(1)
   Date: 06-09-2021
   Question: Write a program to convert an infix expression to postfix expression and
             evaluate the postfix expression and prints the value. The given infix 
             expression need not be fully paranthesized. So your program should handle
             the precedence of operators.
*/             

#include <iostream>
#include <algorithm>
#include <stack>
using namespace std;

class Conversion
{
    public:
      bool isOperator(char c)
    {
        return (!isalpha(c) && !isdigit(c));
    }

    int getPriority(char C)
    {
        if (C == '-' || C == '+')
            return 1;
        else if (C == '*' || C == '/')
            return 2;
        else if (C == '^')
            return 3;
        return 0;
    }

    string infixToPostfix(string infix, int& val)
    {
        infix = '(' + infix + ')';
        int l = infix.size();
        stack<char> char_stack;
        string output;
        string buffer;

        for (int i = 0; i < l; i++)
        {
            if (isalpha(infix[i]) || isdigit(infix[i])){
                output += infix[i];
                buffer+=infix[i];

            }

            else if (infix[i] == '(')
                char_stack.push('(');

            else if (infix[i] == ')')
            {
                buffer+='$';
                while (char_stack.top() != '(')
                {
                    buffer += char_stack.top();
                    output += char_stack.top();
                    char_stack.pop();
                }
                char_stack.pop();
            }

            else
            {
                if (isOperator(char_stack.top()))
                {
                    buffer+='$';
                    while ((getPriority(infix[i])<= getPriority(char_stack.top()))|| (getPriority(infix[i])<= getPriority(char_stack.top())&& infix[i] == '^'))
                    {
                        buffer+=char_stack.top();
                        output += char_stack.top();
                        char_stack.pop();
                    }
                    char_stack.push(infix[i]);
                }
            }
        }
        stack<string>calculation;
    for(int i=0;i<buffer.size();i++){
        int j=i;
        if(buffer[i]=='$'){
            continue;
        }
        else if(buffer[i]=='+'){
            int a = stoi(calculation.top());
            calculation.pop();
            int b = stoi(calculation.top());
            calculation.pop();
            calculation.push(to_string(b+a));
        }
        else if(buffer[i]=='-'){
            int a = stoi(calculation.top());
            calculation.pop();
            int b = stoi(calculation.top());
            calculation.pop();
            calculation.push(to_string(b-a));
        }
        else if(buffer[i]=='*'){
            int a = stoi(calculation.top());
            calculation.pop();
            int b = stoi(calculation.top());
            calculation.pop();
            calculation.push(to_string(b*a));
        }
        else if(buffer[i]=='/'){
            int a = stoi(calculation.top());
            calculation.pop();
            int b = stoi(calculation.top());
            calculation.pop();
            calculation.push(to_string(b/a));
        }
        else if(buffer[i]=='%'){
            int a = stoi(calculation.top());
            calculation.pop();
            int b = stoi(calculation.top());
            calculation.pop();
            calculation.push(to_string(b%a));
        }
        else if(buffer[i]=='^'){
            int a = stoi(calculation.top());
            calculation.pop();
            int b = stoi(calculation.top());
            calculation.pop();
            calculation.push(to_string(b^a));
        }
        else{
            j=i;
            string num="";
            while(buffer[j]!='$'){
                num = num+buffer[j];
                j++;
            }
            i=j;
            calculation.push(num);
        }
    }
    val = stoi(calculation.top());
        return output;
    }

};

int main()
{
    Conversion c;
	string s;
    cin>>s;
	cout<<"Infix expression: "<<s<< "\n"<< endl;
    int val;
    stoi(c.infixToPostfix(s,val));
	cout <<"Postfix expression: "<<c.infixToPostfix(s,val)<<"\n"<< endl;
    cout<<"Value of the expression as per bodmas rule: "<<val<<endl;
	return 0;
}


