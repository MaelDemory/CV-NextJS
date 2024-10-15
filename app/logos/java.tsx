import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import logo from "@/assets/images/logos/java.svg";

export default function JavaLogo() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className='text-center'>Java</CardTitle>
            </CardHeader>
            <CardContent>
                <Image src={logo} alt="Java Logo" width={64} height={64}/>
            </CardContent>
        </Card>
    );
}