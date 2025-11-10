// Q1. Create a class Box with multiple constructors:
// - No-arguments
// One-argument 
// Parameterized constructor

class Box {

    int length, breadth, height;
    int volume;

    Box(int l, int b, int h) {
        length = l;
        breadth = b;
        height = h;
        volume = length * breadth * height;
    }

    Box() {
        System.out.println("No arguments passed!");
    }

    Box(int b) {
        length = breadth = height = b;
        volume = length * breadth * height;
    }

    void displayVolume() {
        System.out.println("Volume: " + volume);
    }

    public static void main(String[] args) {
        Box box1 = new Box(2, 3, 4);
        box1.displayVolume();

        Box box2 = new Box();

        Box box3 = new Box(5);
        box3.displayVolume();
    }
}
