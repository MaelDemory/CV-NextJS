import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import logo from "@/assets/images/logos/react-native.svg";

export default function ReactNativeLogo() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className='text-center'>React Native</CardTitle>
            </CardHeader>
            <CardContent>
                <Image src={logo} alt="React Native Logo" width={64} height={64}/>
            </CardContent>
        </Card>
    );
}