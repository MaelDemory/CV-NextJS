import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import logo from "@/assets/images/logos/php.svg";

export default function Php() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className='text-center'>PHP</CardTitle>
            </CardHeader>
            <CardContent>
                <Image src={logo} alt="PHP Logo" width={64} height={64}/>
            </CardContent>
        </Card>
    );
}