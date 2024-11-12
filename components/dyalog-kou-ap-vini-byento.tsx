'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { BookOpen, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function ComingSoonModal() {
  const [imel, setImel] = useState('');
  const [soumetFini, setSoumetFini] = useState(false);
  const [ouveDialog, setOuveDialog] = useState(true);

  const jerelSoumet = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Imel ki soumèt:', imel);
    setSoumetFini(true);
  };

  useEffect(() => {
    if (!ouveDialog) {
      const timeoutId = setTimeout(() => {
        setOuveDialog(true);
      }, 5000);

      // Clear timeout if the component unmounts to prevent memory leaks
      return () => clearTimeout(timeoutId);
    }
  }, [ouveDialog]);

  return (
    <Dialog open={ouveDialog} onOpenChange={setOuveDialog}>
      <DialogTrigger asChild></DialogTrigger>
      <DialogContent className='w-[calc(100%-2rem)] sm:max-w-[425px] p-0 rounded-xl'>
        <Card className='border-0 shadow-none'>
          <CardHeader className='space-y-2 p-4 sm:p-6'>
            <div className='flex items-start justify-between'>
              <CardTitle className='text-xl sm:text-2xl font-bold flex items-center gap-2'>
                <BookOpen className='w-5 h-5 sm:w-6 sm:h-6' />
                <span className='leading-tight'>Kou yo ap Vini Byento!</span>
              </CardTitle>
              {/* <Button
                variant='ghost'
                size='icon'
                className='h-6 w-6 rounded-full -mt-1 -mr-2'
                onClick={() => setOuveDialog(false)}
              >
                <X className='h-4 w-4' />
                <span className='sr-only'>Fèmen</span>
              </Button> */}
            </div>
            <CardDescription className='text-sm'>
              N ap travay di pou pote ou kou ekstraòdinè. Se ou k ap premye
              konnen lè yo disponib!
            </CardDescription>
          </CardHeader>
          <CardContent className='p-4 sm:p-6'>
            {!soumetFini ? (
              <form onSubmit={jerelSoumet} className='space-y-4'>
                <div className='space-y-2'>
                  <Label htmlFor='imel' className='text-sm font-medium'>
                    Adrès imel
                  </Label>
                  <Input
                    id='imel'
                    type='email'
                    placeholder='ou@egzanp.com'
                    value={imel}
                    onChange={(e) => setImel(e.target.value)}
                    required
                    className='w-full'
                  />
                </div>
                <Button type='submit' className='w-full'>
                  <Mail className='w-4 h-4 mr-2' />
                  Fè m konnen
                </Button>
              </form>
            ) : (
              <div className='text-center space-y-2 py-4'>
                <p className='text-lg font-semibold text-green-600'>
                  Mèsi pou enterè ou!
                </p>
                <p className='text-sm'>
                  N ap fè w konnen depi kou nou yo disponib.
                </p>
              </div>
            )}
          </CardContent>
          <CardFooter className='text-xs sm:text-sm text-center text-gray-500 p-4 sm:p-6'>
            Lè w enskri, ou dakò ak Kondisyon Itilizasyon ak Règleman sou Vi
            Prive nou yo.
          </CardFooter>
        </Card>
      </DialogContent>
    </Dialog>
  );
}
