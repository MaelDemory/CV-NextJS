import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import logo from "@/assets/images/logos/angular.svg";

export default function AngularLogo() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className='text-center'>Angular</CardTitle>
            </CardHeader>
            <CardContent>
                <Image src={logo} alt="Angular Logo" width={64} height={64}/>
            </CardContent>
        </Card>
    );
}