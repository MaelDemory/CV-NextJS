import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import logo from "@/assets/images/logos/mongodb.svg";

export default function MongodbLogo() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className='text-center'>MongoDB</CardTitle>
            </CardHeader>
            <CardContent>
                <Image src={logo} alt="MongoDB Logo" width={64} height={64}/>
            </CardContent>
        </Card>
    );
}