import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import logo from "@/assets/images/logos/typescript.svg";

export default function TypescriptLogo() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className='text-center'>Typescript</CardTitle>
            </CardHeader>
            <CardContent>
                <Image src={logo} alt="Typescript Logo" width={64} height={64}/>
            </CardContent>
        </Card>
    );
}