import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import logo from "@/assets/images/logos/UML.svg";

export default function UMLLogo() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className='text-center'>UML</CardTitle>
            </CardHeader>
            <CardContent>
                <Image src={logo} alt="UML Logo" width={64} height={64}/>
            </CardContent>
        </Card>
    );
}