import Ch1.Ch1;

public class Main {
    public static void main(String[] args) {
        int[] arr = {1, 3, 5, 7, 9};
        System.out.println(Ch1.binarySearch(arr, 5)); //2
        System.out.println(Ch1.binarySearch(arr, 10)); // -1
    }
}