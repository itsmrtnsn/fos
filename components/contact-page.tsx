'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone } from 'lucide-react';

export function ContactPageComponent() {
  return (
    <div className='min-h-screen flex items-center justify-center lg:max-w-6xl  mx-auto'>
      <div className='container mx-auto px-0 lg:px-4 py-16'>
        <h1 className='text-5xl md:text-7xl font-extrabold text-center mb-4'>
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800'>
            Kontakte nou
          </span>
        </h1>
        <p className='text-base text-muted-foreground text-center mb-16 max-w-2xl mx-auto'>
          Nou la pou nou tande w epi ede w avèk nenpòt kesyon ou genyen. Pa
          ezite kontakte nou.
        </p>

        <div className='grid md:grid-cols-2 gap-12 mx-4'>
          <Card className='p-4 shadow-none transition-shadow duration-300'>
            <CardContent className='p-2'>
              <h2 className='text-2xl font-bold mb-6 text-red-700'>
                Voye nou yon mesaj
              </h2>
              <form className='space-y-6'>
                <div className='space-y-2'>
                  <label className='text-sm font-medium text-gray-700'>
                    Non
                  </label>
                  <Input
                    placeholder='Antre non w'
                    className='border-red-200 focus:border-red-500'
                  />
                </div>
                <div className='space-y-2'>
                  <label className='text-sm font-medium text-gray-700'>
                    Imèl
                  </label>
                  <Input
                    type='email'
                    placeholder='ou@egzanp.com'
                    className='border-red-200 focus:border-red-500'
                  />
                </div>
                <div className='space-y-2'>
                  <label className='text-sm font-medium text-gray-700'>
                    Mesaj
                  </label>
                  <Textarea
                    placeholder='Ekri mesaj ou a...'
                    className='min-h-[150px] border-red-200 focus:border-red-500'
                  />
                </div>
                <Button className='w-full bg-red-600 hover:bg-red-700 transition-colors duration-300'>
                  Voye Mesaj
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className='space-y-8'>
            <Card className='p-4 shadow-none transition-shadow duration-300 '>
              <CardContent className='flex p-2 items-start space-x-4'>
                <MapPin className='w-8 h-8 text-primary' />
                <div>
                  <h3 className='font-semibold text-xl mb-2'>Adrès nou</h3>
                  <p>ri séjourné Dèlmas 19</p>
                </div>
              </CardContent>
            </Card>

            <Card className='p-4 shadow-none transition-shadow duration-300 '>
              <CardContent className='flex p-2 items-start space-x-4'>
                <Phone className='w-8 h-8 text-primary' />
                <div>
                  <h3 className='font-semibold text-xl mb-2'>Telefòn</h3>
                  <p>+509 2222-2222</p>
                </div>
              </CardContent>
            </Card>

            {/* <Card className='p-4 shadow-none transition-shadow duration-300 '>
              <CardContent className='flex p-2 items-start space-x-4'>
                <Mail className='w-8 h-8 text-primary' />
                <div>
                  <h3 className='font-semibold text-xl mb-2'>Imèl</h3>
                  <p className='text-wrap'>
                    federasyonoganizasyonsosyalis@gmail.com
                  </p>
                </div>
              </CardContent>
            </Card> */}

            <div className='mt-8'>
              <h3 className='text-2xl font-bold mb-4 text-red-700'>Orè Biwo</h3>
              <ul className='space-y-2 text-gray-600'>
                <li>Lendi - Vandredi: 9:00 AM - 5:00 PM</li>
                <li>Samdi: Fèmen</li>
                <li>Dimanch: Fèmen</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
