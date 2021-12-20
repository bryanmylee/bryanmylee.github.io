<div class="p-6 space-y-6 bg-shade">
	<div class="flex items-center gap-6">
		<div class="flex-shrink-0 w-16 h-16">
			<slot name="icon" />
		</div>
		<div>
			<slot name="heading" />
		</div>
	</div>
	<div class="space-y-4">
		<slot name="content" />
	</div>
</div>
