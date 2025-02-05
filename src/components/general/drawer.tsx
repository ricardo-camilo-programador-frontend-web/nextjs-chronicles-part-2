import type { FC, ComponentPropsWithoutRef } from 'react';
import { forwardRef } from 'react';
import * as DrawerPrimitive from '@radix-ui/react-dialog';

const Drawer = DrawerPrimitive.Root;

const DrawerTrigger = DrawerPrimitive.Trigger;

const DrawerClose = DrawerPrimitive.Close;

const DrawerOverlay: FC<ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>> = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ ...props }, ref) => (
  <DrawerPrimitive.Overlay
    className={'fixed inset-0 z-50 bg-gray-900/10 opacity-100 backdrop-blur-sm'}
    {...props}
    ref={ref}
  />
));
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;

type DrawerContentProps = ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>;

const DrawerContent = forwardRef<
  HTMLDivElement,
  DrawerContentProps
>(({ children, ...props }, ref) => (
  <DrawerPrimitive.Portal>
    <DrawerOverlay />
    <DrawerPrimitive.Content
      ref={ref}
      className={
        'inset-y-0 right-0 h-full max-w-xs w-full data-[state=open]:animate-drawer-open data-[state=closed]:animate-drawer-close fixed z-50 shadow-2xl bg-gray transition-all ease-in-out duration-100 outline-none'
      }
      {...props}>
      {children}
    </DrawerPrimitive.Content>
  </DrawerPrimitive.Portal>
));
DrawerContent.displayName = DrawerPrimitive.Content.displayName;

export { Drawer, DrawerTrigger, DrawerClose, DrawerContent };
