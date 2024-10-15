import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import logo from "@/assets/images/logos/Python.svg";

export default function PythonLogo() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className='text-center'>Python</CardTitle>
            </CardHeader>
            <CardContent>
                <Image src={logo} alt="Python Logo" width={64} height={64}/>
            </CardContent>
        </Card>
    );
}