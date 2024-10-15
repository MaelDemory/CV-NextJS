import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import logo from "@/assets/images/logos/Laravel.svg";

export default function LaravelLogo() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className='text-center'>Laravel</CardTitle>
            </CardHeader>
            <CardContent>
                <Image src={logo} alt="Laravel Logo" width={64} height={64}/>
            </CardContent>
        </Card>
    );
}