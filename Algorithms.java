package Code;
import java.util.Random;
import java.util.ArrayList;

/**
 * Created by NikoBenick on 3/12/2016.
 */
public class Algorithms {
    private ArrayList<yOject> yArray;
    public Algorithms(ArrayList<yOject> yArray){
        this.yArray = yArray;
    }
    public yOject getResult(){
        //note a single Random object is reused here
        Random randomGenerator = new Random();
        int size = yArray.size();
        int randomNum = randomGenerator.nextInt(size);
        yOject result = yArray.get(randomNum);
        return result;
    }
}
