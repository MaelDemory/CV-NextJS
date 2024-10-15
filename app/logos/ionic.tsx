import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import logo from "@/assets/images/logos/Ionic.svg";

export default function IonicLogo() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className='text-center'>Ionic</CardTitle>
            </CardHeader>
            <CardContent>
                <Image src={logo} alt="Ionic Logo" width={64} height={64}/>
            </CardContent>
        </Card>
    );
}