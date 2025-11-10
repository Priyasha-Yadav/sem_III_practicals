// Write a program to create a singly linked list and perfeorm:
// - Insert a node at the beginning.
// - Display the list 


#include <iostream>
using namespace std;

class Node{
    public:
    int data;
    Node* next;

    Node(int val){
        data = val;
        next = nullptr;
    }
};

void insertAtBeginning(Node* &head, int val){
    Node* newNode = new Node(val);
    newNode->next = head;
    head = newNode;
}

void displayList(Node* head){
    Node* ptr = head;
    while(ptr != nullptr){
        cout << ptr->data << " -> ";
        ptr = ptr->next;
    }
    cout << "nullptr" << endl;
}


int main(){

Node* head = nullptr;
insertAtBeginning(head, 10);
insertAtBeginning(head, 20);
displayList(head);

    return 0;
}