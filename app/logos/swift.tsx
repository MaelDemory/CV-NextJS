import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import logo from "@/assets/images/logos/swift.svg";

export default function SwiftLogo() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className='text-center'>Swift</CardTitle>
            </CardHeader>
            <CardContent>
                <Image src={logo} alt="Swift Logo" width={64} height={64}/>
            </CardContent>
        </Card>
    );
}