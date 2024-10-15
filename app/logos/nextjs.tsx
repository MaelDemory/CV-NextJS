import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import logo from "@/assets/images/logos/next-js.svg";

export default function NextJSLogo() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className='text-center'>NextJS</CardTitle>
            </CardHeader>
            <CardContent>
                <Image src={logo} alt="NextJS Logo" width={64} height={64}/>
            </CardContent>
        </Card>
    );
}