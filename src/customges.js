// import dependencies
import {Finger , FingerCurl , FingerDirection , GestureDescription} from 'fingerpose';

//define gesture 

// alphabet A

export const A_Gesture = new GestureDescription('A');
//thumb
A_Gesture.addCurl(Finger.thumb,FingerCurl.NoCurl,1.0)
A_Gesture.addDirection(Finger.thumb,FingerDirection.VerticalUp,0.25)

for(let finger of [Finger.middle , Finger.ring, Finger.index , Finger.pinky]){
    A_Gesture.addCurl(finger,FingerCurl.FullCurl,0.75);
    A_Gesture.addDirection(finger,FingerDirection.VerticalDown,0.25);
}

// alphabet B

export const B_Gesture = new GestureDescription('B');
//thumb
B_Gesture.addCurl(Finger.thumb,FingerCurl.FullCurl,1.0)
B_Gesture.addDirection(Finger.thumb,FingerDirection.HorizontalLeft,0.25)
B_Gesture.addDirection(Finger.thumb,FingerDirection.HorizontalRight,0.25)

//INDEX
B_Gesture.addCurl(Finger.index,FingerCurl.NoCurl,1.0)
B_Gesture.addDirection(Finger.index,FingerDirection.VerticalUp,0.25)

//MIDDLE
B_Gesture.addCurl(Finger.middle,FingerCurl.NoCurl,1.0)
B_Gesture.addDirection(Finger.middle,FingerDirection.VerticalUp,0.25)

//RING
B_Gesture.addCurl(Finger.ring,FingerCurl.NoCurl,1.0)
B_Gesture.addDirection(Finger.ring,FingerDirection.VerticalUp,0.25)

//PINKY
B_Gesture.addCurl(Finger.pinky,FingerCurl.NoCurl,1.0)
B_Gesture.addDirection(Finger.pinky,FingerDirection.VerticalUp,0.25)

// alphabet C

export const C_Gesture = new GestureDescription('C');

for(let finger of [Finger.middle , Finger.ring, Finger.index , Finger.pinky]){
    A_Gesture.addCurl(finger,FingerCurl.HalfCurl,0.75);
}

// alphabet D
export const D_Gesture = new GestureDescription('D');

for(let finger of [Finger.middle , Finger.ring, Finger.pinky]){
    D_Gesture.addCurl(finger,FingerCurl.FullCurl,0.75);
    D_Gesture.addDirection(finger,FingerDirection.VerticalDown,0.25);
}

//thumb
D_Gesture.addCurl(Finger.thumb,FingerCurl.FullCurl,1.0)
D_Gesture.addDirection(Finger.thumb,FingerDirection.HorizontalLeft,0.25)
D_Gesture.addDirection(Finger.thumb,FingerDirection.HorizontalRight,0.25)

// INDEX
D_Gesture.addCurl(Finger.index,FingerCurl.NoCurl,1.0)
D_Gesture.addDirection(Finger.index,FingerDirection.VerticalUp,0.25)

// ALPHABET E
export const E_Gesture = new GestureDescription('E');

for(let finger of [Finger.index ,Finger.middle , Finger.ring, Finger.pinky]){
    E_Gesture.addCurl(finger,FingerCurl.FullCurl,0.75);
    E_Gesture.addDirection(finger,FingerDirection.VerticalDown,0.25);
}

//thumb
E_Gesture.addCurl(Finger.thumb,FingerCurl.FullCurl,1.0)
E_Gesture.addDirection(Finger.thumb,FingerDirection.HorizontalLeft,0.25)
E_Gesture.addDirection(Finger.thumb,FingerDirection.HorizontalRight,0.25)

// ALPHABET F
export const F_Gesture = new GestureDescription('F');
//index
F_Gesture.addCurl(Finger.index,FingerCurl.FullCurl,1.0)
F_Gesture.addDirection(Finger.index,FingerDirection.VerticalDown,0.25)

// thumb
F_Gesture.addCurl(Finger.index,FingerCurl.NoCurl,1.0)
F_Gesture.addDirection(Finger.index,FingerDirection.VerticalUp,0.25)


for(let finger of [Finger.thumb ,Finger.middle , Finger.ring, Finger.pinky]){
    F_Gesture.addCurl(finger,FingerCurl.FullCurl,0.75);
    F_Gesture.addDirection(finger,FingerDirection.VerticalDown,0.25);
}