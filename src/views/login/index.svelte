<div
  class="flex h-[40rem] w-[60rem]  bg-[url('/images/wallpapers/barth-bailey.jpg')] bg-cover bg-center overflow-hidden shadow-md duration-500 hover:shadow-lg"
>
  <div class="flex flex-col gap-4 items-center justify-center h-full w-3/5 ">
    <img class="opacity-80" src="/insight.png" alt="Insight" />
    <span class="font-extrabold text-5xl"> INSIGHT </span>
  </div>
  <div
    class="flex flex-col gap-2 py-16 text-gray-900 font-normal h-full w-2/5 bg-[#fffd] shadow-md"
  >
    <span>Hello, Welcome To <span class="text-theme">Insight.</span></span>
    <span class="-mt-1 text-gray-500 text-xs">V1.0.0</span>
    <form class="mt-16">
      <div class="mb-8 font-medium">Login To Your Account :</div>
      <div class="relative inline-block">
        <ion-icon
          class="absolute left-1.5 top-1/2 -translate-y-1/2"
          name="person-circle-outline"
        />
        <input
          class="border-0 border-b-2 rounded-t-md bg-white w-[17rem] duration-100 tracking-widest text-sm px-8 py-1.5 outline-none"
          type="text"
          placeholder="Username"
        />
      </div>
      <div class="relative inline-block mt-6 mb-6">
        <ion-icon
          class="absolute left-1.5 top-1/2 -translate-y-1/2"
          name="keypad-outline"
        />
        <input
          class="border-0 border-b-2 rounded-t-md bg-white w-[17rem] duration-100 tracking-widest text-sm px-8 py-1.5 outline-none"
          type="password"
          placeholder="Password"
        />
      </div>
      <div class="form-control inline-block mb-4 w-[17rem]">
        <label class="label cursor-pointer">
          <span class="label-text text-gray-500"
            >Automatic logout (15min idle)</span
          >
          <input
            type="checkbox"
            checked="checked"
            class="checkbox checkbox-primary"
          />
        </label>
      </div>
      <button
        class="block m-auto bg-theme opacity-80 duration-100 text-white border-0 w-[17rem] rounded-md px-8 py-2 tracking-widest hover:opacity-100"
        type="submit"
        on:click|preventDefault>SUBMIT</button
      >
    </form>
  </div>
</div>
