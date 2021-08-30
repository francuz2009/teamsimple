<template>
  <div>
    <ContactsIntro />
    <Map />
  </div>
</template>

<script>

export default {
  layout: 'LayoutPage',
  components: {
    ContactsIntro: () => import('~/components/Contacts/ContactIntro'),
    Map: ()=>import('~/components/Contacts/Map'),
    }
}

</script>
