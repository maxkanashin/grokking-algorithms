public class Main {
    public static void main(String[] args) {
        int[] arr = {1, 3, 5, 7, 9};
        System.out.println(binarySearch(arr, 5)); //2
        System.out.println(binarySearch(arr, 10)); // -1
    }

    public static int binarySearch(int[] list, int item) {
        int low = 0;
        int high = list.length - 1;

        while (low <= high) {
            int mid = (low + high) / 2;
            int guess = list[mid];
            if (guess == item)
                return mid;
            if (guess > item) {
                high  = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        return -1;
    }
}