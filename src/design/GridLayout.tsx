import { h, FunctionComponent } from 'preact';

const GridLayout: FunctionComponent = () => {
  return (
    <div class="grid-cols-12-layout h-screen z-50 absolute inset-0 w-full">
      <span class="bg-grid-color">&nbsp;</span>
      <span class="bg-grid-color">&nbsp;</span>
      <span class="bg-grid-color">&nbsp;</span>
      <span class="bg-grid-color">&nbsp;</span>
      <span class="bg-grid-color">&nbsp;</span>
      <span class="bg-grid-color">&nbsp;</span>
      <span class="bg-grid-color">&nbsp;</span>
      <span class="bg-grid-color">&nbsp;</span>
      <span class="bg-grid-color">&nbsp;</span>
      <span class="bg-grid-color">&nbsp;</span>
      <span class="bg-grid-color">&nbsp;</span>
      <span class="bg-grid-color">&nbsp;</span>
    </div>
  );
};

export default GridLayout;
