import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import logo from "@/assets/images/logos/React.svg";

export default function ReactLogo() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className='text-center'>React</CardTitle>
            </CardHeader>
            <CardContent>
                <Image src={logo} alt="React Logo" width={64} height={64}/>
            </CardContent>
        </Card>
    );
}